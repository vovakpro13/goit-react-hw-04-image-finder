import { useCallback, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import styles from 'components/App/style.module.css';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (query?.length) fetchImages();
  }, [page, query]);

  const fetchImages = useCallback(() => {
    setLoading(true);

    fetch(
      `${process.env.REACT_APP_BASE_API_URL}?q=${query}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(({ total, hits }) => {
        setTotal(total);
        setImages(prev => prev.concat(hits));
      })
      .catch(reason => alert(reason.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target[1].value;

    setImages([]);

    if (!!value?.length) {
      if (page !== 1) {
        setPage(1);
      }

      return setQuery(value);
    }
  };

  const handleLoadMore = () => setPage(prev => prev + 1);

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSubmit} />

      <ImageGallery images={images} />

      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        radius="1"
        visible={isLoading}
      />

      {!!images.length && total > images.length && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};
