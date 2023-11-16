import { useState } from "react";
import { useOutlet } from "react-router-dom";

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [os] = useState(o);
    return os;
}
 
export default AnimatedOutlet;