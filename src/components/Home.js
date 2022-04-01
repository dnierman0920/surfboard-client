import IndexSurfboards from "./surfboard/IndexSurfboards"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const {msgAlert, user} = props

	return (
		<>
			<h2>Home Page</h2>
			<IndexSurfboards msgAlert={msgAlert} user={user}/>
		</>
	)
}

export default Home
