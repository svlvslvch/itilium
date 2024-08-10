export interface IRequest {
  /**
   * Ожидает ответа.
   */
  awaiting: boolean;
  /**
   * Дата создания.
   */
  createdAt: string;
  /**
   * Состав услуг.
   */
  composition: string;
  /**
   * Дата крайнего срока.
   */
  deadlineAt: string;
  /**
   * Описание.
   */
  description: string;
  /**
   * Номер.
   */
  number: number;
  /**
   * Услуги.
   */
  service: string;
  /**
   * Решение.
   */
  solution: string;
  /**
   * Состояние.
   */
  state: string;
  /**
   * Ключ состояния.
   */
  stateKey: string;
  /**
   * Тема.
   */
  topic: string;
  /**
   * Дата изменения.
   */
  updatedAt: string;
}

export interface IGetRequestsParams {
  /**
   * Номер обращения.
   */
  number?: number;
  /**
   * Состояние обращения.
   */
  state?: string;
  /**
   * Username.
   */
  username: string;
}
