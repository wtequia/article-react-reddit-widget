import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Header,
  Icon,
  Button,
} from '@el-espectador-ti/ee-components';

// Render each post
function renderPost(post){
  const { data: { title, url, author, id } } = post
  const authorUrl = `https://www.reddit.com/u/${author}`

  return (
    <div className="reddit_widget__post" key={id}>
      <div className="reddit_widget__posted_by">
        posted by <a href={authorUrl} className="reddit_widget__posted_by" target="_blank" rel="noopener noreferrer">u/{author}</a>
      </div>
      <a href={url} className="reddit_widget__title" target="_blank" rel="noopener noreferrer">{title}</a>
    </div>
  )
}

// Filter, since reddit always returns stickied posts up top
function nonStickiedOnly(post){
  return !post.data.stickied
}

function App({ domElement }) {
  const subreddit = domElement.getAttribute("data-subreddit")
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from reddit
    setLoading(true)
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data.children.slice(0, 10));
      })
      .catch((e) => {
        console.log(e)
        setLoading(false);
        setError('error fetching from reddit');
      });
  }, [ subreddit ])

  return (
    <div className="reddit_widget__app">
              <Button
          className='Button-upgradePlan Button_leftSpace Button-upgradePlan_popUp Button_yellow'
          link={
            '/suscripcion-digital/?utm_source=interno&utm_medium=boton&utm_campaign=guardar_articulos&utm_content=boton_suscripción_guardar-articulos'
          }
        >
          Suscríbete
          <Icon
            className='Icon_seeMore Icon_popUpSeeMore'
            icon='angle-double-right'
          />
        </Button>
      <h1 className="reddit_widget__header">
        Latest posts in <a href={`https://reddit.com/r/${subreddit}`} rel="noopener noreferrer">/r/{subreddit}</a>
      </h1>
      <div className="reddit_widget__inner">
        {loading && "Loading..."}
        {error && error}
        {!!data.length && data.filter(nonStickiedOnly).map(renderPost)}
      </div>
      <p className="reddit_widget__powered_by">
        This wiiiiiiiiiiidget is powered by{" "}
        <a
          href="https://javascriptpros.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          JavaScriptPros.com
        </a>
      </p>
    </div>
  );
}

export default App;
