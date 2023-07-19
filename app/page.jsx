import Feed from "@components/Feed"

const Home = () => {
  return (
	<section className="w-full flex-center flex-col">
		<h1 className="head_text text-center">
			Find and Share
			<br className="max-md"/>
			<span className="orange_gradient text-center">AI-powered prompts</span>
		</h1>
		<p className="desc text-center">
			Prompt Library is an open-source AI prompting 
			website for people to find, create and share 
			creative AI prompts.  
		</p>
		<Feed />
	</section>
  )
}

export default Home