import reactRefresh from "@vitejs/plugin-react-refresh";
import {defineConfig} from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
});
