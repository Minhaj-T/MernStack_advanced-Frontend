import React from "react";
import { Link } from "react-router-dom";

function Public() {
	const content = (
		<section className="public">
			<header>
				<h1>Welcome to<span className="nowrap">Dan D. Repairs!</span></h1>
			</header>
			<main className="public__main">
				<p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
				<address className="public__addr">
                    Dan D. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 123456789<br />
					<a href="tel:+15555555555">(555) 555-555</a>
				</address>
				<br />
				<p>Owner: Dan Davidson</p>
			</main>
			<footer>
				<Link to="/login">Employee Login</Link>
			</footer>
		</section>

	);
	return content;
};
export default Public;