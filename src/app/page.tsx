import { FC, ReactElement } from 'react';
import RootCss from './index.module.scss';

export interface IProps {
    children?: ReactElement;
}
const Home: FC<IProps> = ({ children }) => {
    return <div className={RootCss.main}>Home</div>;
};
export default Home;
