import React, {lazy, Suspense} from 'react'

export const components = [
	{
		path: "./components/component1/file/node1/node2/root/Component1",
	},
	{
		path: "./components/component2/file/node1/node2/Component2",
	},
	{
		path: "./components/Component3"
	},
]


const Home = () => {
	return (
		<div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
			{
				components.map(({ path }, key) => {
					const RandomVariable = lazy(() => import(`${path}`))
					return (
						<Suspense {...{ key }} fallback={<div>Loading...</div>}>
							<RandomVariable />
						</Suspense>
					)
				})
			}
		</div>
	)
}
export default Home
