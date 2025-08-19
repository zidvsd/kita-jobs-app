export const handleCapsLock = (
  e: React.KeyboardEvent,
  setShowCapsLock: (value: boolean) => void,
) => {
  const isCapsLockOn = e.getModifierState && e.getModifierState("CapsLock");
  setShowCapsLock(isCapsLockOn);
};
export const firstCharToUpper = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const parseDate = (dateStr: string): Date => new Date(dateStr);
