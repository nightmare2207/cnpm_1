function useDefaultLayout() {
  function handleClick(upDate) {
    upDate((prev) => !prev);
  }
  return {
    handleClick,
  };
}

export default useDefaultLayout;
