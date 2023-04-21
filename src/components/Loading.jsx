import React from 'react'
import '../stylesheets/loading.css'

const Loading = () => {
  return (
    <div className='loading-stuff'>
        <div className="loading-card">
            <div className="loading-top">
                <div className="img skeleton"></div>
                <div className="w-full">
                    <div className='skeleton skeleton-text'></div>
                    <div className='skeleton skeleton-text'></div>
                </div>
            </div>
            <div className="loading-bottom">
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
            </div>
        </div>
        <div className="loading-card">
            <div className="loading-top">
                <div className="img skeleton"></div>
                <div className="w-full">
                    <div className='skeleton skeleton-text'></div>
                    <div className='skeleton skeleton-text'></div>
                </div>
            </div>
            <div className="loading-bottom">
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
            </div>
        </div>
        <div className="loading-card">
            <div className="loading-top">
                <div className="img skeleton"></div>
                <div className="w-full">
                    <div className='skeleton skeleton-text'></div>
                    <div className='skeleton skeleton-text'></div>
                </div>
            </div>
            <div className="loading-bottom">
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
                <div className='skeleton skeleton-text'></div>
            </div>
        </div>
    </div>
  )
}

export default Loading;