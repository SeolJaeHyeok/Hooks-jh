export const useTabs = (initialTabs, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabs);

  if (!allTabs || Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
