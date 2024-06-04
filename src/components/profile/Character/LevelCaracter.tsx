import React, {useEffect, useRef, useState} from 'react';
import {
	LevelWrap,
	LevelTop,
	LevelArticle,
	LevelFigure,
} from './CharacterStyles';
import comment from 'assets/svg/comment.svg';
import data from './data.json';
import {imageLoader} from 'helpers/utils';
import {useUser} from 'helpers/hooks';

type TPLevel = {
	checks?: number;
	level?: number;
	hero?: any;
};

const LevelBlock: React.FC<TPLevel> = ({level, hero}) => {
	const parentScroll = useRef<HTMLDivElement | null>(null)
	const activeLevel = useRef<HTMLDivElement | null>(null)

	useEffect(()=> {
		const rect = activeLevel.current?.getBoundingClientRect()

		// @ts-ignore
		if (parentScroll && rect) {
			parentScroll.current?.scroll({
				left: (rect.left - rect.width / 2),
				behavior: 'smooth',
			})
		}
	}, [activeLevel])

	return (
		<LevelArticle ref={parentScroll}>
			{hero?.buttons?.map((title: string, i: number) => {
				let levels = 5
				return (
					<div
						className={`article-item${i === levels ? ' is-zero' : ''}`}
						data-level={levels - i === level}
						key={i}
						ref={levels - i === level ? activeLevel : null}
					>
						<div className="article-number">{levels - i}</div>
						<div className="article-title">{title}</div>
					</div>
				)
			})}
		</LevelArticle>
	);
};

export const LevelCharacter: React.FC = () => {
	const {user} = useUser()
	/*@ts-ignore*/
	const [hero, setHero] = useState<any>(data[user?.avatar?.type]);
	useEffect(() => {
		setHero(data[user?.avatar?.type as keyof TCharacterType]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user?.avatar?.type]);

	return (
		<LevelWrap>
			<LevelTop>
				<div className="top-item">
					<span>Количество чеков</span>
					<span className="top-numb">{user?.checks_count}</span>
				</div>
				<div className="top-item">
					<span>Ваш уровень</span>
					<span className="top-numb">{user?.level}/{5}</span>
				</div>
			</LevelTop>
			<LevelBlock level={user?.level} hero={hero}/>
			<LevelFigure>
				<div className="figure-wrap">
					{user?.level > 0 &&
                        <div className="figure-name">{user?.avatar?.name}</div>
					}
					{hero && hero[user?.level]?.title &&
						<div
							className="figure-text"
							style={{backgroundImage: `url(${comment})`}}>
							<span>{hero[user?.level].title}</span>
						</div>
					}
					<div className="figure-img">
						<img src={imageLoader(hero[user?.level]?.img)} alt="" loading="lazy"/>
					</div>
				</div>
			</LevelFigure>
		</LevelWrap>
	);
};
