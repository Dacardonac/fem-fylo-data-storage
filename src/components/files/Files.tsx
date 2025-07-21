import c from './Files.module.scss';

const Files = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <article className={c.files}>
      <figure className={c['files__figure']}>
        <a href="#">
          <img
            className={c['files__figure-logo']}
            src="/images/logo.svg"
            alt="Logo Fylo"
            role="img"
            aria-label="Fylo logo"
          />
        </a>
      </figure>
      <section className={c['files__icons']}>
        <div className={c['files__icons-container']}>
          <img
            className={c['files__icons-svg']}
            src="/images/icon-document.svg"
            alt="icon-document"
          />
        </div>
        <div className={c['files__icons-container']}>
          <img
            className={c['files__icons-svg']}
            src="/images/icon-folder.svg"
            alt="icon-folder"
          />
        </div>
        <label className={c['files__icons-container']}>
          <span className={c['files__icons-sr']}>Upload a file</span>
          <img
            className={c['files__icons-svg']}
            src="/images/icon-upload.svg"
            alt="icon-upload"
          />
          <input
            className={c['files__icons-input']}
            type="file"
            aria-label="Upload a file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      </section>
    </article>
  );
};

export default Files;
