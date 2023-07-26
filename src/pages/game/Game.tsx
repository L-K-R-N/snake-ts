import { useEffect, useRef, useState } from 'react'
import '../../styles/App.css'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import { useActions } from '../../hooks/useActions'
import { useInterval } from '../../hooks/useInterval'
import { directions } from '../../types/game'
import { ControllerBox } from '../../components/ControllerBox/ControllerBox'
import { Pause } from '../../components/Pause/Pause'
import './Game.css'



const canvasX = 1000
const canvasY = 1000
const initialSnake = [ [ 4, 10 ], [ 4, 10 ] ]
const initialApple = [ 14, 10 ]
const scale = 50
const timeDelay = 100


export const Game: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [ snake, setSnake ] = useState(initialSnake)
	const [ apple, setApple ] = useState(initialApple)
	const [ score, setScore ] = useState(0)
	const {gameOver, isPlaying, direction} = useTypesSelector(state => state.game)
    const {delay} = useTypesSelector(state => state.nulls)
	const {
		gameOverActionCreator, 
		isPlayingActionCreator, 
		changeDirectionActionCreator,
		pauseOpenedActionCreator,
		changeDelayActionCreator,
		} = useActions()
	
	
	useInterval(() => runGame(), delay)

	useEffect(
		() => {
			if (canvasRef.current) {
				const canvas = canvasRef.current

				const ctx = canvas.getContext('2d')
				if (ctx) {
					ctx.setTransform(scale, 0, 0, scale, 0, 0)
					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
					ctx.fillStyle = "#a3d001"
					snake.forEach(([ x, y ]) => ctx.fillRect(x, y, 1, 1))
					ctx.fillStyle = 'red'
					ctx.fillRect(apple[0], apple[1], 1, 1)
					
				}
			}
		},
		[ snake, apple, gameOver ]
	)

	function handleSetScore() {
		if (score > Number(localStorage.getItem("snakeScore"))) {
			localStorage.setItem("snakeScore", JSON.stringify(score))
		}
	}
	// const playButton = useRef<HTMLButtonElement | null>(null)
	// const deleteButton = (display: string) => {
	// 	if (!playButton.current) return;
	// 	playButton.current.style. = display;
	// }

	function play() {
		if (!isPlaying) {
		setSnake(initialSnake)
		setApple(initialApple)
		changeDirectionActionCreator(directions.right)
		changeDelayActionCreator(Number(localStorage.getItem('delay')))
		setScore(0)
		gameOverActionCreator(false)
		isPlayingActionCreator(true)
		} else {
			return
		}
	}

	function checkCollision(head: number[]) {
		for (let i = 0; i < head.length; i++) {
			if (head[i] < 0 || head[i] * scale >= canvasX) return true
		}
		for (const s of snake) {
			if (head[0] === s[0] && head[1] === s[1]) return true
		}
		return false
	}

	function appleAte(newSnake: number[][]) {
		let coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
		if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
			let newApple = coord
			setScore(score + 1)
			setApple(newApple)
			return true
		}
		return false
	}

	function runGame() {
		
		const newSnake = [ ...snake ]
		const newSnakeHead = [ newSnake[0][0] + direction[0], newSnake[0][1] + direction[1] ]
		newSnake.unshift(newSnakeHead)
		if (checkCollision(newSnakeHead)) {
			changeDelayActionCreator(null)
			gameOverActionCreator(true)
			handleSetScore()
			isPlayingActionCreator(false)
		}
		if (!appleAte(newSnake)) {
			newSnake.pop()
		}
		setSnake(newSnake)
	}

	const checkDirection = (newDirection: number[]) => {
		for (let i = 0; i < direction.length; i++) {
			if (direction[i] === newDirection[i]) {
				return true
			}
		
		}
		return false
	}
	const changeKeyboardDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case "ArrowLeft":
				if (checkDirection(directions.right)) {
					break
				} else {
					changeDirectionActionCreator(directions.left)
				}	
				break
			case "ArrowUp":
				if (checkDirection(directions.down)) {
					break
				} else {
					changeDirectionActionCreator(directions.up)
				}	
				break
			case "ArrowRight":
				if (checkDirection(directions.left)) {
				break
				} else {
					changeDirectionActionCreator(directions.right)

				}	
				break
			case "ArrowDown":
				if (checkDirection(directions.up)) {
					break
				} else {
					changeDirectionActionCreator(directions.down)

				}	
				break
		}
	}

	const pause = () => {
		pauseOpenedActionCreator(true)
		localStorage.setItem('lastDelay', delay)
		changeDelayActionCreator(null)
	}
	const playBtn = useRef<HTMLButtonElement>(null)
    return (
        <div className="game" onKeyDown={(e) => changeKeyboardDirection(e)}>	
				<header className='game__header'>
					<div className="wrapper game__header-content">
						<div className="pause__container">
							<div onClick={() => pause()} className='burger pause-burger'>
							
							</div>
							<Pause button={playBtn.current}/>
						</div>
						
						<div className="game__header-scorebox scoreBox">
							<h2 className='scorebox__item'>Score: {score}</h2>
							<h2 className='scorebox__item'>High Score: {localStorage.getItem("snakeScore")}</h2>
						</div>
					</div>
				</header>
				<main className="game__main">
					<div className="wrapper game__main-content">
						<div className="game__main-container playAreaBox">

							<canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
							{gameOver && <div className="gameOver">Game Over</div>}

							<ControllerBox/>
							
							<button ref={playBtn} autoFocus onClick={() => play()} className="play-button">
								Play
							</button>
						</div>
					</div>
				</main>
			
			</div>
    )
}