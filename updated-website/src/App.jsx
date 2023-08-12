import React from "react";
import { useState } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Name from "./components/Name";

function App() {
	return (
		<ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Sticky(),  Fade(), MoveOut(0, -200))}>
                    <Name/>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
	);
}

export default App;