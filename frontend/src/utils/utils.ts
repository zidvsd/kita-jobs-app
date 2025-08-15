export const handleCapsLock = (
  e: React.KeyboardEvent,
  setShowCapsLock: (value: boolean) => void,
) => {
  const isCapsLockOn = e.getModifierState && e.getModifierState("CapsLock");
  setShowCapsLock(isCapsLockOn);
};
