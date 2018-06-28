export const OVERLAY_OPEN = "OVERLAY_OPEN";
export const overlayOpenAction = (overlayIn) => ({
  type: OVERLAY_OPEN,
  overlayIsIn: overlayIn
});