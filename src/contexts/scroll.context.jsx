import { createContext, useState } from "react";

export const ScrollRefContext = createContext({
    BannerRef: null,
    setBannerRef: () => { }
})
const ScrollRefProvider = ({ children }) => {
    const [BannerRef, setBannerRef] = useState(null);
    

    const value = { setBannerRef }
    return (<ScrollRefContext.Provider value={value}>{children}</ScrollRefContext.Provider>)
}
export default ScrollRefProvider
