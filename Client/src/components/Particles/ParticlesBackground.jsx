import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";
import style from './ParticlesBackground.module.css';

const ParticlesBackground = () => {

    const particlesInit = useCallback((main) => {
        loadFull(main)
    },[]);

    return ( 
        <div className={style.particles_js}>
            <Particles
                id="tsparticles"
                options={particlesConfig}
                init={particlesInit}
            />
        </div>
     );
}
 
export default ParticlesBackground;