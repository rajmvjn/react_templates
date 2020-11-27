import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Users from './containers/Users/User';
import Posts from './containers/Posts/Posts';

function App() {
  return (
    <div>
      <Layout>
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/users" component={Users} />
            <Route path="/" exact component={Posts} />
          </Switch>
      </Layout>      
    </div>
  );
}

export default App;
