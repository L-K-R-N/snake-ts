import { useEffect, useRef, useState } from 'react'
import './styles/App.css'
import { useInterval } from './hooks/useInterval'
import { Settings } from './components/settings/Settings'
import { useTypesSelector } from './hooks/useTypesSelector'
import { ControllerBox } from './components/ControllerBox/ControllerBox'
import { useActions } from './hooks/useActions'
import { directions } from './types/game'


const canvasX = 1000
const canvasY = 1000
const initialSnake = [ [ 4, 10 ], [ 4, 10 ] ]
const initialApple = [ 14, 10 ]
const scale = 50
const timeDelay = 100



function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [ snake, setSnake ] = useState(initialSnake)
	const [ apple, setApple ] = useState(initialApple)
	const [ delay, setDelay ] = useState<number | null>(null)
	const [ score, setScore ] = useState(0)
	const {gameOver, isPlaying, direction, settings} = useTypesSelector(state => state.game)
	const {
		gameOverActionCreator, 
		isPlayingActionCreator, 
		changeDirectionActionCreator,
		settingsOpenActionCreator} = useActions()
	
	

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
		setDelay(timeDelay)
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
			setDelay(null)
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

	return (
		<div className="App" onKeyDown={(e) => changeKeyboardDirection(e)}>
			<div className="page">	
				<header className='header'>
					<div className="wrapper">
						<div className="header__content">
							<div className="settings__container">
								<div onClick={() => settingsOpenActionCreator(true)} className='burger settings__burger'>
								
								</div>
								<Settings/>
							</div>
							
							<div className="scoreBox">
								<h2>Score: {score}</h2>
								<h2>High Score: {localStorage.getItem("snakeScore")}</h2>
							</div>
							</div>
						</div>
				</header>
				<main className="main">
					
					<div className="playAreaBox">
						<canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
						<ControllerBox/>
						{gameOver && <div className="gameOver">Game Over</div>}
						<button onClick={() => play()} className="playButton">
							Play
						</button>
					</div>
					
					
				</main>
			
			</div>
		</div>
	)
}

export default App
