import RootLayout from '@/layout/RootLayout/RootLayout';
import Heading from '@/components/Heading/Heading';
import TipBox from '@/layout/TipBox/TipBox';
import { Provider } from 'react-redux';
import { store } from '@/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Heading title="spli">
            <br/>tter
          </Heading>
          <TipBox/>
        </RootLayout>
      </Provider>
    </>
  );
}

export default App;
