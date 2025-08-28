export const setDotPosition = (e, sliderRangeRef, setpercentageMoveMouseX) => {
    const intialPointX = sliderRangeRef.current.getBoundingClientRect().left
    const endPointX = sliderRangeRef.current.getBoundingClientRect().right
    if (!e.clientX || e.clientX < 0 || intialPointX > e.clientX || endPointX < e.clientX) return;
    let percentage = (e.clientX - intialPointX) / (endPointX - intialPointX) * 100;
    setpercentageMoveMouseX(percentage);
}