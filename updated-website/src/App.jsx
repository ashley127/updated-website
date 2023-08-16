import React from "react";
import { useState } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import NavBar from "./components/NavBar.jsx";
import Name from "./components/Name.jsx";
import Page1 from "./components/Page1.jsx";

function App() {
	return (
        <div>
            <NavBar/>
            <ScrollContainer>
                <ScrollPage >
                    <Animator animation={batch( Fade(), MoveOut(0, -800))}>
                        <Name />
                    </Animator>
                </ScrollPage>
        </ScrollContainer>

        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(FadeIn(), MoveIn())}>
                    <Page1 />
                </Animator>
            </ScrollPage>
        </ScrollContainer>
        </div>
	);
}

export default App;