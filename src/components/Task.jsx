import getImages from '../functions/getImages';

export default function Task({id, task}) {
		const images = getImages();

		return(
			<div
			key={id}
			className='task-card' 
			data-id={id} 
			data-time={task.time} 
			task-pos={task.position}
			>
				<div className="task-card_head">
					<h3 className="task-card_header">{task.taskHeader}</h3>
					<button className="task-card_menu">
						<img src={images.task.edit} alt='edit' />
					</button>
				</div>
				{task.text &&
				<div disabled className="task-card_text">{task.taskText}</div>
				}
			</div>
		)
}