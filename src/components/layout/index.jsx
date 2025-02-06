import React from 'react';

export default function Layout({children}) {
  return (
    <div>
      <div>{children}</div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Ivan Wu</p>
        </aside>
      </footer>
    </div>
  );
}
