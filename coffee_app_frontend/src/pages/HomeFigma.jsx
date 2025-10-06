import React, { useEffect, useRef } from 'react';
import './home-screen-1-3.css';

/**
 * PUBLIC_INTERFACE
 * HomeFigma
 * A React page that reproduces the Home Screen (screen_1:3) using the assets markup and styles.
 * Assumptions:
 * - Figma image assets are served from public/assets/figmaimages so the src paths like
 *   /assets/figmaimages/figma_image_203_66.png resolve correctly in the app.
 */
function HomeFigma() {
  const rootRef = useRef(null);

  useEffect(() => {
    // Mirror the basic interactions from assets/home-screen-1-3.js without global leaks.
    const root = rootRef.current;
    if (!root) return;

    const search = root.querySelector('.search');
    const searchInput = root.querySelector('#searchInput');

    const onSearchClick = () => {
      if (searchInput && typeof searchInput.focus === 'function') {
        try {
          searchInput.focus();
        } catch {
          /* noop */
        }
      }
    };
    if (search) search.addEventListener('click', onSearchClick);

    const nav = root.querySelector('.bottom-nav');
    const cleanupFns = [];
    if (nav) {
      const items = nav.querySelectorAll('.nav-item');
      items.forEach((item) => {
        const activate = () => {
          items.forEach((i) => i.classList.remove('selected'));
          item.classList.add('selected');
        };
        const clickHandler = () => activate();
        const keyHandler = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activate();
          }
        };
        item.addEventListener('click', clickHandler);
        item.addEventListener('keydown', keyHandler);
        cleanupFns.push(() => {
          item.removeEventListener('click', clickHandler);
          item.removeEventListener('keydown', keyHandler);
        });
      });
    }

    return () => {
      if (search) search.removeEventListener('click', onSearchClick);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <main id="screen-1-3" role="main" aria-label="Home Screen" ref={rootRef}>
      {/* Screen background */}
      <div className="screen-bg" aria-hidden="true" />

      {/* Top right profile ellipse (203:66) */}
      <img
        className="ellipse-1"
        src="/assets/figmaimages/figma_image_203_66.png"
        alt=""
        width="50"
        height="50"
        decoding="async"
        loading="eager"
      />

      {/* Title (203:37) */}
      <h1 className="title" aria-label="Find a coffee shop anywhere">
        Find a coffee shop<br />anywhere
      </h1>

      {/* Search content (206:16) */}
      <section className="search-content" aria-label="Search and Filter">
        {/* Search (206:15) */}
        <div className="search" role="search">
          <div className="search-inner">
            <span className="search-icon" aria-hidden="true">
              <img
                src="/assets/figmaimages/figma_image_205_205.png"
                alt=""
                width="16"
                height="16"
              />
            </span>
            <label className="search-label" htmlFor="searchInput">Search</label>
            <input
              id="searchInput"
              className="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
        {/* Filter (206:13) */}
        <button className="filter" type="button" aria-label="Filter">
          <span className="filter-icon" aria-hidden="true">
            <span className="filter-line top" />
            <span className="filter-line bottom" />
            <img
              className="filter-dot-left"
              src="/assets/figmaimages/figma_image_205_120.png"
              alt=""
              width="8"
              height="8"
            />
            <span className="filter-dot-right" />
          </span>
        </button>
      </section>

      {/* Featured label (203:70) */}
      <h2 className="featured-title">Featured coffee shops</h2>

      {/* Card 1 (205:112) */}
      <article className="card card-1" aria-label="Home Coffee Roasters, 4.5 1,200 reviews, 3.8 miles">
        <div className="card-media">
          <img
            className="card-image"
            src="/assets/figmaimages/figma_image_203_72.png"
            alt="Cafe preview"
            width="153"
            height="168"
          />
          <div className="fab-like">
            <img
              className="fab-bg"
              src="/assets/figmaimages/figma_image_205_84.png"
              alt=""
              width="36"
              height="36"
            />
            <img
              className="fab-heart"
              src="/assets/figmaimages/figma_image_205_91.png"
              alt="Like"
              width="16"
              height="14"
            />
          </div>
        </div>
        <div className="card-info">
          <h3 className="card-title">Home Coffee Roasters</h3>
          <div className="card-rating">
            <img
              className="star"
              src="/assets/figmaimages/figma_image_205_98.png"
              alt=""
              width="13"
              height="12"
            />
            <span className="rating-text">4.5 1,200 reviews</span>
          </div>
          <p className="distance">3.8 miles</p>
        </div>
      </article>

      {/* Card 2 (205:113) */}
      <article className="card card-2" aria-label="Haus Coffee, 4.4 429 reviews, 2.5 miles">
        <div className="card-media">
          <img
            className="card-image"
            src="/assets/figmaimages/figma_image_203_73.png"
            alt="Cafe preview"
            width="153"
            height="190"
          />
          <div className="fab-like alt" aria-hidden="true" />
        </div>
        <div className="card-info">
          <h3 className="card-title">Haus Coffee</h3>
          <div className="card-rating">
            <span className="star-outline" aria-hidden="true" />
            <span className="rating-text">4.4 429 reviews</span>
          </div>
          <p className="distance">2.5 miles</p>
        </div>
      </article>

      {/* Card 3 (205:172) */}
      <article className="card card-3" aria-label="Home Coffee Roasters, 4.5 1,200 reviews, 3.8 miles">
        <div className="card-media">
          <div className="card-image placeholder" role="img" aria-label="Cafe preview" />
          <div className="fab-like alt" aria-hidden="true" />
        </div>
        <div className="card-info">
          <h3 className="card-title">Home Coffee Roasters</h3>
          <div className="card-rating">
            <span className="star-outline" aria-hidden="true" />
            <span className="rating-text">4.5 1,200 reviews</span>
          </div>
          <p className="distance">3.8 miles</p>
        </div>
      </article>

      {/* Card 4 (205:184) */}
      <article className="card card-4" aria-label="Haus Coffee, 4.4 429 reviews, 2.5 miles">
        <div className="card-media">
          <div className="card-image placeholder tall" role="img" aria-label="Cafe preview" />
          <div className="fab-like alt" aria-hidden="true" />
        </div>
        <div className="card-info">
          <h3 className="card-title">Haus Coffee</h3>
          <div className="card-rating">
            <span className="star-outline" aria-hidden="true" />
            <span className="rating-text">4.4 429 reviews</span>
          </div>
          <p className="distance">2.5 miles</p>
        </div>
      </article>

      {/* Bottom Navigation (205:169) */}
      <nav className="bottom-nav" aria-label="Bottom navigation">
        <div className="nav-item home selected" role="button" tabIndex={0} aria-current="page" aria-label="Home">
          <img
            className="home-selected-bg"
            src="/assets/figmaimages/figma_image_205_165.png"
            alt=""
            width="70"
            height="58"
          />
          <img
            className="home-icon"
            src="/assets/figmaimages/figma_image_205_154.png"
            alt="Home"
            width="18"
            height="20"
          />
        </div>
        <div className="nav-item heart" role="button" tabIndex={0} aria-label="Favorites">
          <img
            className="heart-icon"
            src="/assets/figmaimages/figma_image_205_162.png"
            alt="Favorites"
            width="21"
            height="18"
          />
        </div>
        <div className="nav-item bookmark" role="button" tabIndex={0} aria-label="Bookmarks">
          <img
            className="bookmark-icon"
            src="/assets/figmaimages/figma_image_205_157.png"
            alt="Bookmarks"
            width="14"
            height="18"
          />
        </div>
        <div className="nav-item user" role="button" tabIndex={0} aria-label="Profile">
          <img
            className="user-dot"
            src="/assets/figmaimages/figma_image_205_160.png"
            alt=""
            width="8"
            height="8"
          />
        </div>
      </nav>

      {/* Hidden assets to ensure all referenced image paths are included exactly as in JSON */}
      <div className="hidden-assets" aria-hidden="true">
        <img src="/assets/figmaimages/figma_image_205_91.png" alt="" />
        <img src="/assets/figmaimages/figma_image_205_98.png" alt="" />
        <img src="/assets/figmaimages/figma_image_205_205.png" alt="" />
        <img src="/assets/figmaimages/figma_image_205_165.png" alt="" />
        <img src="/assets/figmaimages/figma_image_205_157.png" alt="" />
        <img src="/assets/figmaimages/figma_image_205_160.png" alt="" />
        <img src="/assets/figmaimages/figma_image_205_162.png" alt="" />
        <img src="/assets/figmaimages/figma_image_203_72.png" alt="" />
        <img src="/assets/figmaimages/figma_image_203_73.png" alt="" />
        <img src="/assets/figmaimages/figma_image_203_66.png" alt="" />
      </div>
    </main>
  );
}

export default HomeFigma;
