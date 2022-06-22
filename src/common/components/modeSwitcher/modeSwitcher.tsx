import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { ThemeType } from '../../../nav/NavHeader';

type ModeSwitcherType = {
  theme: ThemeType
  setTheme: (theme: ThemeType)=>void
}

 export const ModeSwitcher = ({theme, setTheme}:ModeSwitcherType) => {
   const toggleTheme = () => setTheme( theme === 'Light' ? 'Dark' : 'Light' )

   return (
    <div onClick={toggleTheme}>
      {theme === 'Light' &&  <IoMoon />}
      {theme === 'Dark' && <IoMoonOutline/>}
    </div>
  );
};
