import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, objectId }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      document.getElementById(objectId).scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
