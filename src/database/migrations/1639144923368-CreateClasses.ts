import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClasses1639144923368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "classes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "teacher_id",
            type: "uuid",
          },
          {
            name: "student_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKTeacher",
            referencedTableName: "teachers",
            referencedColumnNames: ["id"],
            columnNames: ["teacher_id"],
          },
          {
            name: "FKStudent",
            referencedTableName: "students",
            referencedColumnNames: ["id"],
            columnNames: ["student_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("classes", "FKTeacher");
    await queryRunner.dropForeignKey("classes", "FKStudent");
    await queryRunner.dropTable("classes");
  }
}
