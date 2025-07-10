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
        <img
          className={c['files__figure-logo']}
          src="/public/images/logo.svg"
          alt="Logo Fylo"
        />
      </figure>
      <section className={c['files__icons']}>
        <div className={c['files__icons-container']}>
          <img
            className={c['files__icons-svg']}
            src="/public/images/icon-document.svg"
            alt="icon-document"
          />
        </div>
        <div className={c['files__icons-container']}>
          <img
            className={c['files__icons-svg']}
            src="/public/images/icon-folder.svg"
            alt="icon-folder"
          />
        </div>
        <label className={c['files__icons-container']}>
          <img
            className={c['files__icons-svg']}
            src="/public/images/icon-upload.svg"
            alt="icon-upload"
          />
          <input
            className={c['files__icons-input']}
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>

      </section>
    </article>
  );
};

export default Files;
