import { TestBed } from '@angular/core/testing';
import { ManagementService } from './management.service';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { of } from 'rxjs';

const mockTodos: Todo[] = [
  { id: 1, userId: 1, title: 'MockTitle 1', completed: true },
  { id: 2, userId: 2, title: 'MockTitle 2', completed: false },
  { id: 3, userId: 3, title: 'MockTitle 3', completed: false }
];

describe('ManagementService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TodoService,
          useFactory: () => {
            // return new TodoService(null);
            return {};
          }
        }
      ]
    })
  );

  it('should return the correct number of todos', (done: DoneFn) => {
    const service: ManagementService = TestBed.get(ManagementService);
    const stubbedTodoService: TodoService = TestBed.get(TodoService);

    // Initialisierung der Funktion, die durch den Aufruf von countTodos
    // aufgerufen wird.
    // Wird die getTodos Funktion aufgerufen, dann werden die gemockten
    // Daten als Observable zurueckgegeben.
    stubbedTodoService.getTodos = () => of(mockTodos);

    service.countTodos().subscribe((numberOfTodos: number) => {
      expect(numberOfTodos).toBe(mockTodos.length);
      done();
    });
  });
});
