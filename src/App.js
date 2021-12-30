import './css/style.scss'
import Header from "./components/Header";
import Projects from "./components/Projects";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import SocialNetworks from "./sections/SocialNetworks";
import Studies from "./sections/Studies";
import ColorWrapper from "./components/ColorWrapper";

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#FFF',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header />
                <ColorWrapper colorScheme={'light'}>
                    <Studies/>
                </ColorWrapper>
                <ColorWrapper colorScheme={'dark'}>
                    <Projects  />
                </ColorWrapper>
                <ColorWrapper colorScheme={'light'}>
                    <SocialNetworks />
                </ColorWrapper>

            </ThemeProvider>

        </div>
    );
}

export default App;
