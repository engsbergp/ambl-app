import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ShareLatest from '../components/share/ShareLatest';
import ShareTrending from '../components/share/ShareTrending';
import ShareConnections from '../components/share/ShareConnections';
import './share.scss';

function Share() {
  return (
    <div className="share">
      <Header/>
        <ShareLatest/>
        <ShareTrending/>
        <ShareConnections/>
        {/* <p>this will be a page to view, vote, and comment on trending content</p> */}
      <Footer/>
    </div>
  )
}

export default Share
