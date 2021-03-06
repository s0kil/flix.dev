import React, {Component} from 'react';
import {Container} from "reactstrap";
import ReactGA from 'react-ga';

class Research extends Component {

    componentDidMount() {
        document.title = "Flix | Research";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container>
                <h1>Research</h1>

                <p>
                    Research on Flix takes place at <a href="http://cs.au.dk/research/programming-languages/">Aarhus
                    University</a> and the <a
                    href="http://plg.uwaterloo.ca">University of Waterloo</a>.
                </p>

                <div>
                    A significant part of our research is dedicated to the Datalog aspect of Flix, including:
                    <ul>
                        <li>design of a language with first-class Datalog constraints.</li>
                        <li>extensions of Datalog semantics to lattice semantics.</li>
                        <li>implementation of efficient fixpoint engines.</li>
                        <li>use of Flix for program analysis.</li>
                    </ul>
                </div>

                <p>
                    Below is a selection of research papers published on Flix:
                </p>

                <h3>Peer-Reviewed Conferences and Journals</h3>

                <ul>
                    <Paper
                        title="Implicit Parameters for Logic Programming"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="PPDP '18"
                        url="https://dl.acm.org/citation.cfm?id=3236953"/>

                    <Paper
                        title="Safe and Sound Program Analysis with Flix"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="ISSTA '18"
                        url="https://dl.acm.org/citation.cfm?id=3213847"/>

                    <Paper
                        title="Tail Call Elimination and Data Representation for Functional Languages on the Java Virtual Machine"
                        authors="Magnus Madsen, Ramin Zarifi, Ondřej Lhoták"
                        venue="CC '18"
                        url="https://dl.acm.org/citation.cfm?id=3179499"/>

                    <Paper
                        title="From Datalog to Flix: A Declarative Language for Fixed Points on Lattices"
                        authors="Magnus Madsen, Ming-Ho Yee, Ondřej Lhoták"
                        venue="PLDI '16"
                        url="https://dl.acm.org/citation.cfm?id=2908096"/>
                </ul>

                <h3>Workshops</h3>

                <ul>
                    <Paper
                        title="Programming a Dataflow Analysis in Flix"
                        authors="Magnus Madsen, Ming-Ho Yee, Ondřej Lhoták"
                        venue="TAPAS '16"
                        url="http://staticanalysis.org/tapas2016/abstracts/TAPAS_2016_MadsenEtAl.pdf"/>
                </ul>

                <h3>Theses</h3>

                <ul>
                    <Paper
                        title="Implementing a Functional Language for Flix"
                        authors="Ming-Ho Yee"
                        venue="University of Waterloo"
                        url="https://uwspace.uwaterloo.ca/bitstream/handle/10012/10856/Yee_Ming-Ho.pdf?sequence=1"
                    />
                </ul>

                <h3>Other</h3>

                <ul>
                    <Paper
                        title="Flix Koans"
                        authors="Magnus Madsen"
                        venue="Aarhus University"
                        url="https://flix.dev/papers/flix-koans.pdf"
                    />
                </ul>

            </Container>
        );
    }
}

class Paper extends Component {
    render() {
        return (
            <li className="mb-3">
                <a href={this.props.url}>{this.props.title}</a> <b>[{this.props.venue}]</b>
                <br/>
                {this.props.authors}
            </li>
        );
    }
}

export default Research;
