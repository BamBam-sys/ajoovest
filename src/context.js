const { createContext, useState, useRef, useEffect } = require('react');

export const appContext = createContext();

function ContextProvider(props) {
  const [state, setState] = useState({
    mobileNavOpen: false,
    isVisible: null,
  });

  const handleMobileNav = () => {
    setState((prevState) => ({
      ...prevState,
      mobileNavOpen: !prevState.mobileNavOpen,
    }));
  };

  const useObserver = (options) => {
    const ref = useRef();

    useEffect(() => {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(([entry]) => {
        setState((prevState) => ({
          ...prevState,
          isVisible: entry.isIntersecting,
        }));
      }, options);

      if (currentRef) observer.observe(currentRef);

      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref];
  };

  return (
    <appContext.Provider value={{ ...state, handleMobileNav, useObserver }}>
      {props.children}
    </appContext.Provider>
  );
}

export default ContextProvider;
