import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterStudentAddFK1639506326298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "students",
      new TableColumn({
        name: "class_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "teachers",
      new TableForeignKey({
        name: "FK_student_class",
        referencedTableName: "classes",
        referencedColumnNames: ["id"],
        columnNames: ["class_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("students", "class_id");
  }
}
