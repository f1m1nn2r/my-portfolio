export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact">
          <h3 className="footer__title">Contact</h3>
          <div className="footer__contact-item">
            <span aria-hidden="true">📧</span>
            <a
              href="mailto:f1minn2r@naver.com"
              className="footer__contact-link">
              f1minn2r@naver.com
            </a>
          </div>
          <div className="footer__contact-item">
            <span aria-hidden="true">💼</span>
            <span>Web Publisher</span>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2025 React로 만들고 Netlify로 배포했습니다 ✨</p>
        </div>
      </div>
    </footer>
  );
}
