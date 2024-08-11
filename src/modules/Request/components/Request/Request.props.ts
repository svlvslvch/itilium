export interface IRequestProps {
  /**
   * Номер обращения.
   */
  number: number;
  /**
   * Search параметры.
   */
  searchParams: { [key: string]: string };
}
