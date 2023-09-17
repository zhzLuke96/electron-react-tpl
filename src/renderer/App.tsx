import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppLayout } from './components/AppLayout';

import { FluentProvider } from '@fluentui/react-components';
import { ThemeProvider, FluentTheme } from '@fluentui/react';
import { app_state } from './states/app/app.state';
import { themes } from './theme';
import { useToaster } from './modules/Toaster';
import { useEffect } from 'react';

function AppEntry() {
  // some logic
  return (
    <AppLayout
      components={{
        view: <div>hello</div>,
      }}
    />
  );
  //
}

export default function App() {
  const { theme } = app_state.useState();
  const v8Theme = themes.v8[theme];
  const v9Theme = themes.v9[theme];

  // install toaster
  const { toasterRender, notify } = useToaster();
  useEffect(() => {
    app_state.state.notify = notify;
  }, [notify]);

  return (
    <FluentProvider theme={v9Theme}>
      <ThemeProvider theme={v8Theme}>
        {toasterRender()}
        <Router>
          <Routes>
            <Route path="/" element={<AppEntry />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </FluentProvider>
  );
}
