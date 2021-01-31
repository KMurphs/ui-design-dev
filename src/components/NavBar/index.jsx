import './index.css';

export default function NavBar() {
  return (
    <nav className="nav m-2 flex flex-col justify-between pt-10 pb-6  bg-secondary-purple-500 rounded-4xl">
      <section className="nav_logo nav_link text-white text-center">C|Mac</section>
      <section className="nav_links flex flex-col justify-center text-center">
        <button className="nav_link">
          <svg viewBox="0 0 65 80" preserveAspectRatio="none" width="65" height="80">
            <path d="M 66,0 A 20,20 0 0 1 46,20 H 23 A 20,20 0 0 0 3,40 20,20 0 0 0 23,60 h 23 a 20,20 0 0 1 20,20 z" />
          </svg>
          <span className="nav_link__content"><i className="lni lni-display"></i></span>
        </button>
        <button className="nav_link nav_link--active">
          <svg viewBox="0 0 65 80" preserveAspectRatio="none" width="65" height="80">
            <path d="M 66,0 A 20,20 0 0 1 46,20 H 23 A 20,20 0 0 0 3,40 20,20 0 0 0 23,60 h 23 a 20,20 0 0 1 20,20 z" />
          </svg>
          <span className="nav_link__content"><i className="lni lni-display"></i></span>
        </button>
        <button className="nav_link">
          <svg viewBox="0 0 65 80" preserveAspectRatio="none" width="65" height="80">
            <path d="M 66,0 A 20,20 0 0 1 46,20 H 23 A 20,20 0 0 0 3,40 20,20 0 0 0 23,60 h 23 a 20,20 0 0 1 20,20 z" />
          </svg>
          <span className="nav_link__content"><i className="lni lni-display"></i></span>
        </button>
      </section> 
      <section className="nav_exit nav_link text-white text-center"><i className="lni lni-display"></i></section>

    </nav>
  );
}

