import React, {useEffect, useState} from "react";
import {
	BottomPattern,
	Character,
	DrawStageStyles, Inner,
	StageFife,
	StageFour,
	StageOne,
	StageThree,
	StageTwo,
	Wrapper
} from "./DrawStageStyles";
import {isMobile, isPad, windowResize} from 'helpers/utils';

import {ReactComponent as Stage1} from "assets/img/drawstage/st-1.svg"
import {ReactComponent as Stage1t} from "assets/img/drawstage/t-st-1.svg"
import {ReactComponent as Stage1m} from "assets/img/drawstage/m-st-1.svg"
import {ReactComponent as Stage2} from "assets/img/drawstage/st-2.svg"
import {ReactComponent as Stage2t} from "assets/img/drawstage/t-st-2.svg"
import {ReactComponent as Stage2m} from "assets/img/drawstage/m-st-2.svg"
import {ReactComponent as Stage3} from "assets/img/drawstage/st-3.svg"
import {ReactComponent as Stage3t} from "assets/img/drawstage/t-st-3.svg"
import {ReactComponent as Stage3m} from "assets/img/drawstage/m-st-3.svg"
import {ReactComponent as Stage4} from "assets/img/drawstage/st-4.svg"
import {ReactComponent as Stage4t} from "assets/img/drawstage/t-st-4.svg"
import {ReactComponent as Stage4m} from "assets/img/drawstage/m-st-4.svg"
import {ReactComponent as Stage5} from "assets/img/drawstage/st-5.svg"
import {ReactComponent as Stage5t} from "assets/img/drawstage/t-st-5.svg"
import {ReactComponent as Stage5m} from "assets/img/drawstage/m-st-5.svg"

import character from "assets/img/animated/animation-250.gif"
import stage1 from "assets/img/drawstage/stage-1.png"
import arrow1 from "assets/img/drawstage/arrow-1.svg"
import arrow1M from "assets/img/drawstage/arrow-m1.svg"
import stage2 from "assets/img/drawstage/stage-2.png"

import arrow2 from "assets/img/drawstage/arrow-2.svg"
import arrow2M from "assets/img/drawstage/arrow-m2.svg"
import arrow2M2 from "assets/img/drawstage/arrow-m2.2.svg"
import stage3 from "assets/img/drawstage/stage-3.png"

import arrow3 from "assets/img/drawstage/arrow-3.svg"
import arrow3M from "assets/img/drawstage/arrow-m3.svg"
import stage4_1 from "assets/img/drawstage/stage-4.1.png"
import stage4_2 from "assets/img/drawstage/stage-4.2.png"
import arrow4 from "assets/img/drawstage/arrow-4.svg"
import arrow4M from "assets/img/drawstage/arrow-m4.svg"
import arrow4M4 from "assets/img/drawstage/arrow-m4.4.svg"
import stage5 from "assets/img/drawstage/stage-5.png"
import bottom from "assets/img/drawstage/bottom-patt.svg";


export const DrawStage: React.FC = () => {
	const [hasPad, setHasPad] = useState(isPad)
	const [hasMobile, setHasMobile] = useState(isMobile)

	useEffect(() => {
		windowResize(setHasPad, 1024)
	}, [setHasPad])
	useEffect(() => {
		windowResize(setHasMobile, 1024)
	}, [setHasMobile])

	return (
		<>
			<DrawStageStyles id="mechanics">
				<Inner>
					<Wrapper>
						<Character children={<img src={character} alt="Загрузка..." width="335" height="370" loading="lazy"/>}/>

						<StageOne>
							<div className="stage-inner">
								{hasMobile ? <Stage1m/> : hasPad ? <Stage1t/> : <Stage1/>}
								<div className="stage-img">
									<img src={stage2} alt="" width="202" height="148" loading="lazy"/>
								</div>
								<div className="stage-arrow">
									<picture>
										<source srcSet={arrow1M} media="(max-width: 1024px)" type="image/svg+xml"/>
										<img src={arrow1} alt="" loading="lazy"/>
									</picture>
								</div>
							</div>
						</StageOne>

						<StageFife>
							<div className="stage-inner">
								{hasMobile ? <Stage5m/> : hasPad ? <Stage5t/> : <Stage5/>}
								<div className="stage-img">
									<img src={stage5} alt="" width="188" height="188" loading="lazy"/>
								</div>
							</div>
						</StageFife>

						<StageTwo>
							<div className="stage-inner">
								{hasMobile ? <Stage2m/> : hasPad ? <Stage2t/> : <Stage2/>}
								<div className="stage-img">
									<img src={stage1} alt="" width="188" height="188" loading="lazy"/>
								</div>

								<div className="stage-arrow">
									<picture>
										<source type="image/svg+xml" media="(max-width: 768px)" srcSet={arrow2M2}/>
										<source type="image/svg+xml" media="(max-width: 1024px)" srcSet={arrow2M}/>
										<img src={arrow2} alt="" loading="lazy"/>
									</picture>
								</div>
							</div>
						</StageTwo>

						<StageFour>
							<div className="stage-inner">
								{hasMobile ? <Stage4m/> : hasPad ? <Stage4t/> : <Stage4/>}
								<div className="stage-img stage-img_sm">
									<img src={stage4_1} alt="" width="188" height="188" loading="lazy"/>
								</div>

								<div className="stage-img">
									<img src={stage4_2} alt="" width="188" height="188" loading="lazy"/>
								</div>

								<div className="stage-arrow">
									<picture>
										<source type="image/svg+xml" media="(max-width: 768px)" srcSet={arrow4M4}/>
										<source type="image/svg+xml" media="(max-width: 1024px)" srcSet={arrow4M}/>
										<img src={arrow4} alt="" loading="lazy"/>
									</picture>
								</div>
							</div>
						</StageFour>

						<StageThree>
							<div className="stage-inner">
								{hasMobile ? <Stage3m/> : hasPad ? <Stage3t/> : <Stage3/>}
								<div className="stage-img">
									<img src={stage3} alt="" width="188" height="188" loading="lazy"/>
								</div>
								<div className="stage-arrow">
									<picture>
										<source type="image/svg+xml" media="(max-width: 1024px)" srcSet={arrow3M}/>
										<img src={arrow3} alt="" loading="lazy" />
									</picture>
								</div>
							</div>
						</StageThree>
					</Wrapper>
				</Inner>

				<BottomPattern children={<img src={bottom} alt="" loading="lazy" />}/>
			</DrawStageStyles>
		</>
	)
}
