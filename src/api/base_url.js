export default function getBaseURL(){
	const dev = window.location.hostname === 'localhost';
	return dev ? 'http://localhost:3001/' : '/';
}
