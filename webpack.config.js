const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = ({ isDev }) => ({
	mode: isDev ? "development" : "production",
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	entry: {
		app: path.join(__dirname, "src", "index.tsx"),
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: "url-loader",
				options: {
					name: "[name].[ext]?[hash]",
					limit: 5000,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: "/node_modules",
				loader: "babel-loader",
				options: {
					presets: [
						["@babel/preset-env", { targets: { esmodules: true, browsers: ["last 2 versions"] } }],
						"@babel/preset-react",
					],
					plugins: [isDev && "react-refresh/babel"].filter(Boolean),
				},
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			VERSION: JSON.stringify("v0.1.0"),
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new ReactRefreshWebpackPlugin(),
	],
	devServer: {
		port: 9000, // 개발서버 포트 (기본값: 8080)
		historyApiFallback: true, // 404 응답 시 index.html로 리다이렉트
		open: true,
		hot: true,
		proxy: {
			"/api": {
				target: "http://localhost:3001",
				pathRewrite: { "^/api": "/" },
			}, // 프론트 단에서 CORS 에러 해결하는 방법,
		},
	},
});

module.exports = (env, argv) => config({ isDev: argv.mode === "development" });
