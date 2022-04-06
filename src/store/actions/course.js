export function toggleLesson(module, lesson) {

  // Este objeto é padrão dos reducers, mais especificamente a propriedade
  // 'type' com uma 'action' que será passada para a função dispatch
  return {
    type: 'TOGGLE_LESSON',
    module, 
    lesson
  }
}