import { useEffect } from "react";
import { useFirstMountState } from "./useFirstMountState";

function useUpdateEffect(effect, deps) {
  const isFirstMount = useFirstMountState();
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
