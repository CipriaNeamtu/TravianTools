import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from 'react-router-dom';
import { mainNav } from "./utils/constants";
import { AuthProvider } from "./context/auth";
import { StorageProvider } from "./context/storage";
import { UsersManagementProvider } from "./context/users-management";

function App() {
	return (
		<>
			<StorageProvider>
				<AuthProvider>
					<UsersManagementProvider>
						<Nav items={mainNav}></Nav>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/tools" element={<Tools />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/dashboard" element={<Dashboard />} />
						</Routes>
						<Footer></Footer>
					</UsersManagementProvider>
				</AuthProvider>
			</StorageProvider>
		</>
	)
}

export default App;