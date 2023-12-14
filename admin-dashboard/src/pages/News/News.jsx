import React, { useEffect, useLayoutEffect, useState } from 'react';
import './News.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../../store/categories';
import Validation from '../../utils/Validation';
import { createNewsArticle, getSingleNewsArticle, updateNewsArticle } from '../../store/news';
import { useNavigate, useParams } from 'react-router-dom';

const News = () => {
  const dispatch = useDispatch();
  const validation = new Validation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { categories, newsArticle } = useSelector((state) => {
    return {
      categories: state.categories.categoryList,
      newsArticle: state.newsArticles.newsArticle,
    }
  });

  const [title, setTitle] = useState('');
  const [detail, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [category_id, setCategory_id] = useState('');

  useLayoutEffect(() => {
    dispatch(getCategoryList());
    if(id) {
      dispatch(getSingleNewsArticle(id));
    }
  },[]);

  useEffect(() => {
    if(newsArticle.success){
      setTitle(newsArticle.data.title);
      setDescription(newsArticle.data.detail);
      setImage(newsArticle.data?.image);
      setCategory(newsArticle.data.category);
      setCategory_id(newsArticle.data?.category_id);
    }
  },[newsArticle]);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    setImage(e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    // setCategory_id(e.target.value);
  };

  const submitArticleHandler = () => {
    if(validation.isNotEmpty(title) && validation.isNotEmpty(detail) && validation.isNotEmpty(category)){
      if(id) dispatch(updateNewsArticle({_id: id, title, detail, image, category}, navigate));
      else dispatch(createNewsArticle({title, detail, image, category}, navigate));
    }
  };

  return (
    <div className="blog-page">
      <h1>Create News Article</h1>
      <div className="input-group">
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="input-group">
        <label>Description:</label>
        <textarea rows={10} value={detail} onChange={handleDescriptionChange} />
      </div>
      <div className="input-group">
        <label>Image:</label>
        <input type="file" value={image} onChange={handleImageChange} />
      </div>
      <div className="input-group">
        <label>Category:</label>
        <select value={category} onChange={(e) => handleCategoryChange(e)}>
          <option value="">Select a category</option>
          {categories.data?.length ? categories.data.map((category, index) => <option key={index} value={category.title} name={category.title} >{category.title}</option>): null}
        </select>
      </div>
      <button onClick={submitArticleHandler} className="submit-button">Submit</button>
    </div>
  );
};

export default News;
