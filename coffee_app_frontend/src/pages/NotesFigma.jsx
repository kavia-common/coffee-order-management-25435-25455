import React, { useEffect, useRef, useState } from 'react';
import './notes-delete-after-reading-8-3.css';

/**
 * PUBLIC_INTERFACE
 * NotesFigma
 * A React page that reproduces the Notes [Delete after reading] screen using the assets markup and styles.
 * - Imports the CSS from assets ported to src/pages (notes-delete-after-reading-8-3.css).
 * - Adapts the "delete after reading" interaction from assets/notes-delete-after-reading-8-3.js into React-safe handlers.
 * - Ensures all image paths used are via /assets/figmaimages/... served from public.
 */
function NotesFigma() {
  const rootRef = useRef(null);
  const [deleted, setDeleted] = useState(false);
  const [statusVisible, setStatusVisible] = useState(false);

  useEffect(() => {
    // No external DOM querying is necessary beyond local ref for potential future enhancements.
    // Interaction is handled with React state.
  }, []);

  const handleDeleteAfterReading = () => {
    // Simulate "deleting" the note content
    setDeleted(true);
    // Show status text
    setStatusVisible(true);
  };

  return (
    <main id="screen-8-3" role="main" aria-label="Notes [Delete after reading]" ref={rootRef}>
      {/* Background layer if needed for solid color */}
      <div className="screen-surface" aria-hidden="true"></div>

      {/* Notes container (FRAME 8:18) */}
      <section className="notes-frame" aria-labelledby="notes-title">
        <header className="notes-header">
          <h1 id="notes-title" className="title">Notes ✏️</h1>
        </header>

        <article className="notes-content">
          {!deleted ? (
            <>
              <p className="notes-text">
                • Icons are from @ Feather Icons and Flaticon
              </p>
              <p className="notes-text">
                • Raleway can be downloaded for free @ Google Fonts
              </p>
            </>
          ) : null}
        </article>

        {/* Hidden assets to ensure image paths are included exactly as in JSON; loading from public/assets/figmaimages */}
        <div className="hidden-assets" aria-hidden="true">
          <img src="/assets/figmaimages/figma_image_203_66.png" alt="" />
          <img src="/assets/figmaimages/figma_image_203_72.png" alt="" />
          <img src="/assets/figmaimages/figma_image_203_73.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_120.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_154.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_157.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_160.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_162.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_165.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_198.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_200.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_205.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_84.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_91.png" alt="" />
          <img src="/assets/figmaimages/figma_image_205_98.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_18.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_20.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_36.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_43.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_60.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_65.png" alt="" />
          <img src="/assets/figmaimages/figma_image_207_80.png" alt="" />
        </div>
      </section>

      {/* Delete-after-reading control */}
      <div className="dar-bar" role="region" aria-label="Delete after reading controls">
        <button
          id="deleteAfterReadingBtn"
          className="dar-btn"
          type="button"
          onClick={handleDeleteAfterReading}
          disabled={deleted}
          aria-live="polite"
          style={
            deleted
              ? {
                  background:
                    'linear-gradient(180deg, rgba(239,68,68,0.08), rgba(239,68,68,0))',
                  color: '#EF4444',
                }
              : undefined
          }
        >
          {deleted ? 'Note deleted' : 'Delete note after reading'}
        </button>
        <span
          id="darStatus"
          className={`dar-status${statusVisible ? ' visible' : ''}`}
          aria-hidden={statusVisible ? 'false' : 'true'}
        >
          {statusVisible ? 'This note has been deleted after reading.' : ''}
        </span>
      </div>
    </main>
  );
}

export default NotesFigma;
